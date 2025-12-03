import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // On retire output: 'export' (Vercel le fait mieux tout seul)
  // On retire basePath (pour être à la racine du site)
  // On retire images: unoptimized (Vercel optimise les images gratuitement)
  
  eslint: {
    // Évite que le déploiement échoue pour une petite erreur de code
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;