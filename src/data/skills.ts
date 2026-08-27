import {
  FaAws,
  FaCode,
  FaJava,
  FaRobot,
  FaServer,
} from "react-icons/fa6";
import {
  SiBlender,
  SiC,
  SiClaude,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSelenium,
  SiSpring,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import {
  TbCircuitGround,
  TbCpu,
  TbDatabase,
  TbDeviceDesktopCog,
  TbTool,
  TbTransform,
} from "react-icons/tb";

// 스킬 인벤토리
export const skillInventory = [
  {
    category: "Code",
    items: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "C", icon: SiC },
      { name: "C#", icon: SiC },
      { name: "Java", icon: FaJava },
      { name: "Spring", icon: SiSpring },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Unity", icon: SiNodedotjs },
    ],
  },
  {
    category: "Infra",
    items: [
      { name: "System Intergration", icon: TbTransform },
      { name: "Supabase", icon: SiSupabase },
      { name: "Web/WAS", icon: FaServer },
      { name: "AWS", icon: FaAws },
      { name: "Linux Server", icon: TbDeviceDesktopCog },
      { name: "IoT", icon: TbCpu },
    ],
  },
  {
    category: "Tech",
    items: [
      { name: "LLM Agent", icon: FaRobot },
      { name: "Data Analysis", icon: TbDatabase },
      { name: "Selenium Automation", icon: SiSelenium },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "AutoCAD", icon: TbTool },
      { name: "Inventor", icon: TbTool },
      { name: "Blender", icon: SiBlender },
      { name: "Fusion", icon: FaCode },
      { name: "OrCAD", icon: TbCircuitGround },
      { name: "Claude Code", icon: SiClaude },
      { name: "Codex", icon: FaCode },
    ],
  },
];

// 스킬 인벤토리 (메인 페이지)
export const featuredSkillInventory = skillInventory.flatMap((group) =>
  group.items.slice(0, 10)
);
