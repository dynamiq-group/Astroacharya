'use client';

import { useEffect, useRef, useState } from 'react';
import './background-music.css';

const VIDEO_ID = '0N6ZEsEJvsI';
const START_SECONDS = 417;
const API_URL = 'https://www.youtube.com/iframe_api';

/** The root layout preserves playback across client-side navigation. */
export default function BackgroundMusic() {
  const hostRef = useRef(null);
  const playerRef = useRef(null);
  const [status, setStatus] = useState('loading');
  const playing = status === 'playing';

  useEffect(() => {
    let disposed = false;
    let player;
    let poll;
    const host = hostRef.current;
    const fail = () => {
      if (disposed) return;
      clearInterval(poll);
      setStatus('error');
    };
    const timeout = setTimeout(fail, 20000);
    let script = document.querySelector('script[src="' + API_URL + '"]');
    if (!script) {
      script = document.createElement('script');
      script.src = API_URL;
      script.async = true;
      document.head.appendChild(script);
    }
    script.addEventListener('error', fail);

    function initialize() {
      if (disposed || !window.YT?.Player || player) return;
      clearInterval(poll);
      // YouTube replaces this child; React owns the wrapper.
      const target = document.createElement('div');
      host.appendChild(target);
      player = new window.YT.Player(target, {
        width: 200,
        height: 200,
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          start: START_SECONDS,
          playsinline: 1,
          controls: 0,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            if (disposed) return;
            clearTimeout(timeout);
            playerRef.current = event.target;
            const iframe = event.target.getIframe();
            iframe.tabIndex = -1;
            iframe.title = 'Background music audio source';
            setStatus('paused');
            event.target.setVolume(35);
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (disposed) return;
            if (event.data === window.YT.PlayerState.PLAYING) setStatus('playing');
            if (event.data === window.YT.PlayerState.PAUSED) setStatus('paused');
            if (event.data === window.YT.PlayerState.BUFFERING) setStatus('buffering');
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.seekTo(START_SECONDS, true);
              event.target.playVideo();
            }
          },
          onAutoplayBlocked: () => {
            if (!disposed) setStatus('paused');
          },
          onError: () => {
            clearTimeout(timeout);
            fail();
          },
        },
      });
    }

    // Wait for the shared API without overwriting its global ready callback.
    poll = setInterval(initialize, 100);
    initialize();
    return () => {
      disposed = true;
      clearInterval(poll);
      clearTimeout(timeout);
      script.removeEventListener('error', fail);
      playerRef.current = null;
      player?.destroy();
      host.replaceChildren();
    };
  }, []);

  const pauseAction = playing || status === 'buffering';
  function togglePlayback() {
    const player = playerRef.current;
    if (!player) return;
    if (pauseAction) {
      player.pauseVideo();
    } else {
      player.unMute();
      player.playVideo();
    }
  }

  const caption = {
    loading: 'Loading music…',
    playing: 'Now spinning',
    paused: 'Tap to play',
    buffering: 'Buffering…',
    error: 'Music unavailable',
  }[status];

  return (
    <aside className="vinyl-player" aria-label="Background music">
      <div ref={hostRef} className="vinyl-audioSource" aria-hidden="true" />
      <button
        type="button"
        className="vinyl-control"
        data-playing={playing}
        onClick={togglePlayback}
        disabled={status === 'loading' || status === 'error'}
        aria-label={pauseAction ? 'Pause background music' : 'Play background music'}
        aria-pressed={pauseAction}
      >
        <span className="vinyl-turntable" aria-hidden="true">
          <span className="vinyl-record">
            <span className="vinyl-label"><i /></span>
          </span>
          <span className="vinyl-tonearm" />
        </span>
      </button>
      <span className="vinyl-srOnly" role="status">{caption}</span>
    </aside>
  );
}

