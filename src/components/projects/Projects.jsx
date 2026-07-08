"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Cpu, Server, Database, GitBranch, Layers, Zap, ShieldCheck } from "lucide-react";
import TiltCard from "@/components/layout/TiltCard";

const PROJECTS = [
  {
    id: 1,
    title: "Conveyor Belt Monitoring System",
    subtitle: "JSW Steel — Industrial Computer Vision",
    description: "AI-powered real-time defect detection system for JSW Steel's manufacturing line, achieving 96% accuracy and reducing manual inspection time by 70%.",
    detailedDescription:
      "Designed and deployed a production-grade Computer Vision system to monitor JSW Steel's conveyor belt in real time. The system continuously analyzes live camera feeds using a fine-tuned YOLOv8 model to detect surface defects, foreign objects, and material anomalies at industrial scale, replacing the need for manual visual inspection.",
    technologies: ["YOLOv8", "OpenCV", "Python", "Computer Vision"],
    features: ["Real-time Inspection", "96% Accuracy", "Defect Tracking"],
    metrics: [
      { label: "Detection Accuracy", value: "96%" },
      { label: "Inspection Time", value: "−70%" },
      { label: "Processing Speed", value: "30+ FPS" },
    ],
    architecture: [
      { icon: <Cpu size={16} />, step: "Camera Feed", detail: "Live RTSP stream from industrial cameras" },
      { icon: <Layers size={16} />, step: "YOLOv8 Inference", detail: "Custom-trained model runs inference per frame" },
      { icon: <ShieldCheck size={16} />, step: "Defect Classification", detail: "Categorizes anomaly type and severity" },
      { icon: <Server size={16} />, step: "Alert & Logging", detail: "Triggers alerts and logs defects to dashboard" },
    ],
    challenge: "Processing high-resolution camera feeds at industrial speed without latency spikes, while maintaining detection accuracy across varying lighting and material conditions.",
    solution: "Implemented a multi-threaded inference pipeline with frame batching, model quantization for GPU efficiency, and adaptive pre-processing to normalize lighting variations.",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 2,
    title: "Real-Time Material Detection Pipeline",
    subtitle: "High-Performance Computer Vision",
    description: "Built a high-performance Material Detection and Classification pipeline capable of processing 30+ FPS while maintaining 95% classification accuracy.",
    detailedDescription:
      "Engineered a real-time material detection and classification system optimized for throughput and accuracy. The pipeline classifies different raw materials on moving conveyor belts, enabling intelligent sorting and quality control in manufacturing environments.",
    technologies: ["Deep Learning", "Python", "Computer Vision", "TensorRT"],
    features: ["30+ FPS Processing", "95% Accuracy", "Material Classification"],
    metrics: [
      { label: "Throughput", value: "30+ FPS" },
      { label: "Classification Accuracy", value: "95%" },
      { label: "Inference Latency", value: "<33ms" },
    ],
    architecture: [
      { icon: <Cpu size={16} />, step: "Video Input", detail: "Multi-camera stream ingestion" },
      { icon: <Layers size={16} />, step: "Preprocessing", detail: "GPU-accelerated frame resizing & normalization" },
      { icon: <Zap size={16} />, step: "TensorRT Inference", detail: "Optimized model for low-latency GPU inference" },
      { icon: <Database size={16} />, step: "Result Aggregation", detail: "Classification results logged and streamed" },
    ],
    challenge: "Achieving >30 FPS throughput on high-resolution inputs while simultaneously running a deep learning model and streaming results in real time.",
    solution: "Leveraged TensorRT model optimization and CUDA acceleration to cut inference time by 60%, combined with an async pipeline to decouple capture and inference stages.",
    color: "from-red-500 to-pink-500",
  },
  {
    id: 3,
    title: "Cement Bag Counting System",
    subtitle: "JSW Steel — Automated Inventory",
    description: "Designed a computer vision system for JSW Steel using object detection and tracking, achieving 99% counting accuracy and automating inventory verification.",
    detailedDescription:
      "Built a fully automated Cement Bag Counting system using multi-object tracking combined with custom detection. The system counts cement bags on conveyor belts and in storage areas, replacing error-prone manual counting and providing real-time inventory status to plant managers.",
    technologies: ["YOLOv8", "Deep Learning", "Object Tracking", "Python"],
    features: ["99% Accuracy", "Automated Inventory", "Real-Time Tracking"],
    metrics: [
      { label: "Counting Accuracy", value: "99%" },
      { label: "Manual Effort Saved", value: "100%" },
      { label: "Processing", value: "Real-Time" },
    ],
    architecture: [
      { icon: <Cpu size={16} />, step: "Detection", detail: "YOLOv8 detects bags per frame" },
      { icon: <GitBranch size={16} />, step: "Object Tracking", detail: "SORT/ByteTrack assigns unique IDs across frames" },
      { icon: <ShieldCheck size={16} />, step: "Line Crossing", detail: "Virtual counting line triggers count increments" },
      { icon: <Server size={16} />, step: "Dashboard", detail: "Live count synced to inventory management system" },
    ],
    challenge: "Bags frequently overlap, stack, and move in irregular patterns causing identity switches, missed detections, and double-counting.",
    solution: "Implemented a virtual counting line algorithm with ByteTrack for robust re-identification. Added a confidence-threshold filter to suppress phantom detections from partial bag views.",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 4,
    title: "BOM Automation Solution",
    subtitle: "Enterprise Document Processing",
    description: "Engineered an automated Bill of Materials processing pipeline, drastically reducing manual processing time by 60% and improving extraction accuracy to 98%.",
    detailedDescription:
      "Built an end-to-end automation pipeline for processing complex Bill of Materials (BOM) documents. The system ingests unstructured Excel, PDF, and structured data formats, extracts structured fields using custom NLP and regex pipelines, validates extracted data against a PostgreSQL schema, and outputs a clean, standardized dataset ready for downstream ERP ingestion.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "NLP", "Pandas"],
    features: ["Data Extraction", "60% Time Reduction", "98% Accuracy"],
    metrics: [
      { label: "Extraction Accuracy", value: "98%" },
      { label: "Processing Time", value: "−60%" },
      { label: "Formats Supported", value: "PDF, XLS, CSV" },
    ],
    architecture: [
      { icon: <Server size={16} />, step: "Document Ingestion", detail: "FastAPI endpoint accepts multi-format uploads" },
      { icon: <Layers size={16} />, step: "Parsing Engine", detail: "Custom NLP + regex extracts fields from raw text" },
      { icon: <ShieldCheck size={16} />, step: "Validation Layer", detail: "Schema validation ensures data integrity" },
      { icon: <Database size={16} />, step: "PostgreSQL Storage", detail: "Structured BOM data stored for ERP export" },
    ],
    challenge: "BOM documents arrive in inconsistent formats with varying column structures, abbreviations, and units — making rule-based extraction brittle.",
    solution: "Built a hybrid extraction engine combining regex patterns, fuzzy matching, and LLM-assisted field normalization to handle format variability robustly.",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 5,
    title: "Enterprise AI Agent",
    subtitle: "Generative AI — RAG & Vector Search",
    description: "Developed a comprehensive enterprise AI Agent that reduces document retrieval time from minutes to seconds using advanced generative AI and vector search architectures.",
    detailedDescription:
      "Architected a multi-capability enterprise AI agent powered by a Retrieval-Augmented Generation (RAG) pipeline. The agent ingests company documents, embeds them into a vector database, and answers complex natural-language queries with contextually grounded, source-cited responses. It supports conversational memory, multi-document reasoning, and escalation to human agents.",
    technologies: ["LLMs", "RAG", "FastAPI", "Vector Databases", "LangChain"],
    features: ["Sub-second Retrieval", "Conversational AI", "Document Search"],
    metrics: [
      { label: "Retrieval Speed", value: "<1s" },
      { label: "Documents Indexed", value: "10k+" },
      { label: "Query Accuracy", value: "94%" },
    ],
    architecture: [
      { icon: <Server size={16} />, step: "Document Ingestion", detail: "PDF/DOCX parsed, chunked, and embedded" },
      { icon: <Database size={16} />, step: "Vector Store", detail: "Embeddings stored in Pinecone/ChromaDB" },
      { icon: <Zap size={16} />, step: "RAG Retrieval", detail: "Semantic search retrieves top-k relevant chunks" },
      { icon: <Cpu size={16} />, step: "LLM Generation", detail: "Context-grounded response generated by the LLM" },
    ],
    challenge: "Enterprise documents contain dense, domain-specific jargon. Generic embeddings produced poor recall and the LLM frequently hallucinated when context was insufficient.",
    solution: "Fine-tuned embedding models on domain corpus and implemented a hybrid retrieval strategy (semantic + BM25 keyword search). Added a guard-rail layer to refuse responses when retrieved context confidence was below threshold.",
    color: "from-purple-500 to-violet-600",
  },
  {
    id: 6,
    title: "LangGraph AI QA Application",
    subtitle: "Agentic Workflow — Multi-Stage Pipeline",
    description: "An AI-powered question-answering web application delivering contextual, document-aware responses through intelligent workflow orchestration and a multi-stage pipeline.",
    detailedDescription:
      "Built a production-ready AI QA application using LangGraph for stateful, multi-step workflow orchestration. The application routes user queries through a multi-stage pipeline: intent classification, query validation, document retrieval, and grounded response generation — all orchestrated as a directed graph with conditional branching.",
    technologies: ["FastAPI", "LangGraph", "Gemini LLM", "RAG", "Python"],
    features: ["Contextual Responses", "Intent Routing", "Query Validation"],
    metrics: [
      { label: "Intent Accuracy", value: "97%" },
      { label: "Response Latency", value: "<2s" },
      { label: "Pipeline Stages", value: "5" },
    ],
    architecture: [
      { icon: <GitBranch size={16} />, step: "Intent Classification", detail: "LangGraph node classifies query type" },
      { icon: <ShieldCheck size={16} />, step: "Query Validation", detail: "Guards against malformed or out-of-scope queries" },
      { icon: <Database size={16} />, step: "RAG Retrieval", detail: "Vector search fetches relevant document chunks" },
      { icon: <Cpu size={16} />, step: "Response Generation", detail: "Gemini LLM generates grounded, cited answers" },
    ],
    challenge: "Stateless LLM calls couldn't handle multi-turn conversations or complex queries requiring multiple retrieval steps and conditional logic.",
    solution: "Used LangGraph's stateful graph architecture to maintain conversation context across turns, with conditional edges routing queries through validation, retrieval, or fallback nodes.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 7,
    title: "Multi-Agent Synopsis Evaluation",
    subtitle: "Generative AI — Multi-Agent System",
    description: "A Flask-based multi-agent AI system that analyzes movie synopses to automatically generate genre classification, qualitative scoring, and in-depth content evaluation.",
    detailedDescription:
      "Designed a modular, multi-agent AI system where specialized agents collaborate to analyze movie synopses in parallel. A Genre Agent classifies the narrative, a Sentiment Agent scores emotional tone, a Quality Agent rates writing clarity, and an Orchestrator Agent synthesizes all outputs into a unified evaluation report — demonstrating practical multi-agent collaboration patterns.",
    technologies: ["Flask", "Gemini API", "Python", "Multi-Agent"],
    features: ["Modular Architecture", "AI Classification", "Content Scoring"],
    metrics: [
      { label: "Agent Specializations", value: "4" },
      { label: "Genre Accuracy", value: "93%" },
      { label: "Report Generation", value: "<3s" },
    ],
    architecture: [
      { icon: <Layers size={16} />, step: "Orchestrator Agent", detail: "Coordinates and delegates tasks to sub-agents" },
      { icon: <Cpu size={16} />, step: "Genre Agent", detail: "Classifies narrative genre and sub-genre" },
      { icon: <GitBranch size={16} />, step: "Sentiment Agent", detail: "Scores emotional tone and audience appeal" },
      { icon: <ShieldCheck size={16} />, step: "Quality Agent", detail: "Evaluates writing clarity and plot coherence" },
    ],
    challenge: "Coordinating multiple independent LLM calls without context loss, race conditions, or conflicting outputs that would degrade the final synthesized report.",
    solution: "Implemented an Orchestrator pattern where all sub-agents receive the same input and return structured JSON outputs, which the Orchestrator then merges with a final synthesis prompt.",
    color: "from-rose-500 to-red-600",
  },
];

function ProjectModal({ project, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <motion.div
      key="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[2000] flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      {/* Modal */}
      <motion.div
        key="modal-content"
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 60, scale: 0.97 }}
        transition={{ type: "spring", damping: 28, stiffness: 280 }}
        className="relative z-10 w-full sm:max-w-3xl max-h-[92vh] sm:max-h-[88vh] flex flex-col rounded-t-[2.5rem] sm:rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent gradient top bar */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${project.color} shrink-0`} />

        {/* Header */}
        <div className="px-7 pt-7 pb-5 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-1">{project.subtitle}</p>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-100 leading-tight">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-500 text-slate-500 dark:text-slate-400 flex items-center justify-center transition-all"
            >
              <X size={20} />
            </button>
          </div>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 px-7 py-6 space-y-8">

          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">Project Overview</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]">{project.detailedDescription}</p>
          </div>

          {/* Key Metrics */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">Key Metrics</h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {project.metrics.map((m, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 text-center">
                  <div className={`text-lg sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br ${project.color} mb-1`}>
                    {m.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium leading-tight">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* System Architecture */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">System Architecture</h3>
            <div className="relative">
              {project.architecture.map((node, i) => (
                <div key={i} className="flex items-start gap-4 mb-3 last:mb-0">
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-md`}>
                      {node.icon}
                    </div>
                    {i < project.architecture.length - 1 && (
                      <div className="w-0.5 h-5 bg-slate-200 dark:bg-slate-700 mt-1" />
                    )}
                  </div>
                  <div className="pt-1.5">
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{node.step}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{node.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-500/5 border border-red-200 dark:border-red-500/20 rounded-2xl p-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                Challenge
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{project.challenge}</p>
            </div>
            <div className="bg-green-50 dark:bg-green-500/5 border border-green-200 dark:border-green-500/20 rounded-2xl p-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                Solution
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <>
      <section id="projects" className="section relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-slate-100">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.2)]">Projects</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              A comprehensive showcase of enterprise-grade AI solutions and scalable architectures I&apos;ve built. <span className="text-orange-500 font-semibold">Click any card</span> for a full deep-dive.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: 1000 }}>
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project, index) => (
                <motion.div
                  layout
                  custom={index}
                  initial={{ opacity: 0, y: 60, filter: "blur(10px)", rotateX: -15, scale: 0.95 }}
                  whileInView={(i) => ({
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    rotateX: 0,
                    scale: 1,
                    transition: {
                      delay: (i % 3) * 0.15,
                      duration: 0.8,
                      type: "spring",
                      bounce: 0.3
                    }
                  })}
                  viewport={{ once: false, margin: "-50px" }}
                  exit={{ opacity: 0, scale: 0.85, filter: "blur(10px)", transition: { duration: 0.3 } }}
                  key={project.id}
                  className="h-full"
                >
                  <TiltCard
                    onClick={() => setSelectedProject(project)}
                    className="bg-white dark:bg-slate-900/50 dark:backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] overflow-hidden group hover:border-orange-500/40 dark:hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all duration-500 flex flex-col h-full cursor-pointer"
                  >
                    {/* Gradient stripe */}
                    <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

                    {/* Project Details */}
                    <div className="p-8 flex flex-col h-full relative">

                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-3">{project.subtitle}</p>

                      <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-grow text-sm">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                              <span className="leading-snug">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800/50 justify-between items-center">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 shadow-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs font-bold text-orange-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                          Details <ArrowRight size={12} />
                        </span>
                      </div>

                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All Button */}
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mt-16 flex justify-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 rounded-full bg-orange-500 text-white font-bold tracking-wide shadow-md hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:bg-orange-600 transition-all duration-300 hover:scale-105"
            >
              {showAll ? "View Less Projects" : "View All Projects"}
            </button>
          </motion.div>

        </div>
      </section>

      {/* Modal Portal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
