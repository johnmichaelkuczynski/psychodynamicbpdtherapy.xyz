import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { SceneOpen } from './video_scenes/SceneOpen';
import { SceneDashboard } from './video_scenes/SceneDashboard';
import { SceneLecture } from './video_scenes/SceneLecture';
import { SceneAssignmentFormats } from './video_scenes/SceneAssignmentFormats';
import { SceneAssignments } from './video_scenes/SceneAssignments';
import { SceneGrades } from './video_scenes/SceneGrades';
import { ScenePractice } from './video_scenes/ScenePractice';
import { SceneReasoning } from './video_scenes/SceneReasoning';
import { SceneAnalytics } from './video_scenes/SceneAnalytics';
import { SceneClose } from './video_scenes/SceneClose';

export const SCENE_DURATIONS = {
  open: 3500,
  dashboard: 4500,
  lecture: 5500,
  assignmentFormats: 4500,
  assignments: 4000,
  grades: 5500,
  practice: 4500,
  reasoning: 4500,
  analytics: 4500,
  close: 5000
};

const SCENE_COMPONENTS: Record<string, React.ComponentType> = {
  open: SceneOpen,
  dashboard: SceneDashboard,
  lecture: SceneLecture,
  assignmentFormats: SceneAssignmentFormats,
  assignments: SceneAssignments,
  grades: SceneGrades,
  practice: ScenePractice,
  reasoning: SceneReasoning,
  analytics: SceneAnalytics,
  close: SceneClose,
};

const SCENE_START_SEC: Record<string, number> = (() => {
  const out: Record<string, number> = {};
  let cumulativeMs = 0;
  for (const [key, ms] of Object.entries(SCENE_DURATIONS)) {
    out[key] = cumulativeMs / 1000;
    cumulativeMs += ms;
  }
  return out;
})();

const AUDIO_SEEK_EPSILON_SEC = 0.18;

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  muted = false,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  muted?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentSceneKey } = useVideoPlayer({ durations, loop });

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '') as keyof typeof SCENE_DURATIONS;
  const sceneIndex = Object.keys(SCENE_DURATIONS).indexOf(baseSceneKey);
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.45;
    const targetTime = SCENE_START_SEC[baseSceneKey] ?? 0;
    if (Math.abs(audio.currentTime - targetTime) > AUDIO_SEEK_EPSILON_SEC) {
      audio.currentTime = targetTime;
    }
    audio.play().catch(() => {});
  }, [currentSceneKey, baseSceneKey, muted]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#020617] text-white">
      {/* Persistent Background layer */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e1b4b]/40 via-[#020617] to-[#020617]"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMCA0MEwwIDBMMDAgME00MCAwTDQwIDQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] bg-repeat opacity-50" />
      </div>

      <div className="relative z-10 w-full h-full" data-scene-index={sceneIndex}>
        <AnimatePresence mode="popLayout">
          {SceneComponent && <SceneComponent key={currentSceneKey} />}
        </AnimatePresence>
      </div>

      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}audio/bg_music.mp3`}
        preload="auto"
        autoPlay
        muted={muted}
      />
    </div>
  );
}
