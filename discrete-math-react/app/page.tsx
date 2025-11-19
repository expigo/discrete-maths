"use client";

import { BookOpen, Brain, GitBranch, Binary, Database, TrendingUp, Info, Cpu, Activity } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const modules = [
  {
    id: "logic",
    title: "Logic & Proofs",
    description: "Propositional and predicate logic, proof techniques, and formal reasoning",
    icon: Binary,
    color: "bg-blue-500",
    completed: true,
  },
  {
    id: "sets",
    title: "Set Theory",
    description: "Sets, operations, relations, functions, and cardinality",
    icon: Database,
    color: "bg-green-500",
    completed: true,
  },
  {
    id: "combinatorics",
    title: "Combinatorics",
    description: "Counting principles, permutations, combinations, and binomial theorem",
    icon: TrendingUp,
    color: "bg-purple-500",
    completed: true,
  },
  {
    id: "graphs",
    title: "Graph Theory",
    description: "Graphs, trees, algorithms, and Graph Neural Networks",
    icon: GitBranch,
    color: "bg-red-500",
    completed: true,
  },
  {
    id: "number-theory",
    title: "Number Theory",
    description: "Primes, divisibility, modular arithmetic, and cryptography",
    icon: Activity,
    color: "bg-yellow-500",
    completed: false,
  },
  {
    id: "probability",
    title: "Probability Theory",
    description: "Probability spaces, distributions, expectation, and variance",
    icon: TrendingUp,
    color: "bg-indigo-500",
    completed: false,
  },
  {
    id: "information",
    title: "Information Theory",
    description: "Entropy, mutual information, KL divergence, and cross-entropy",
    icon: Info,
    color: "bg-pink-500",
    completed: false,
  },
  {
    id: "boolean",
    title: "Boolean Algebra",
    description: "Boolean functions, logic gates, circuits, and optimization",
    icon: Cpu,
    color: "bg-orange-500",
    completed: false,
  },
  {
    id: "algorithms",
    title: "Algorithms & Complexity",
    description: "Algorithm analysis, Big-O notation, P vs NP, and optimization",
    icon: Brain,
    color: "bg-teal-500",
    completed: false,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold text-white">
                Discrete Mathematics
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-500/20 text-green-400 px-3 py-1.5 rounded-full text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Python Backend: Online</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Master Discrete Mathematics for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Machine Learning
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            A comprehensive, interactive platform combining rigorous theory with practical applications.
            Interactive visualizations, real-time Python execution, and hands-on exercises.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-gray-800 px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold text-primary">4/9</div>
              <div className="text-sm text-gray-400">Modules Complete</div>
            </div>
            <div className="bg-gray-800 px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold text-green-500">25+</div>
              <div className="text-sm text-gray-400">Python Examples</div>
            </div>
            <div className="bg-gray-800 px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold text-purple-500">15+</div>
              <div className="text-sm text-gray-400">Visualizations</div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <motion.div key={module.id} variants={item}>
                <Link href={module.completed ? `/modules/${module.id}` : "#"}>
                  <div
                    className={`
                      group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700
                      transition-all duration-300 hover:scale-105 hover:shadow-2xl
                      ${module.completed ? "hover:border-primary cursor-pointer" : "opacity-60 cursor-not-allowed"}
                    `}
                  >
                    {module.completed ? (
                      <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        Complete
                      </div>
                    ) : (
                      <div className="absolute top-4 right-4 bg-gray-600 text-white text-xs px-2 py-1 rounded-full">
                        Coming Soon
                      </div>
                    )}

                    <div className={`${module.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {module.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {module.description}
                    </p>

                    {module.completed && (
                      <div className="mt-4 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore Module &gt;
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <footer className="border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion</p>
          <p className="text-sm mt-2">Interactive Learning Platform for Discrete Mathematics</p>
        </div>
      </footer>
    </div>
  );
}
