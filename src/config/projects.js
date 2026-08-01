export const PROJECTS = [
  {
    path: '/projects/testimonials',
    title: 'Social Proof Section',
    description: 'A responsive grid layout displaying customer ratings and testimonial cards.',
    gradient: 'from-[#502050] to-[#ee6b6e]',
    thumbnailText: '10,000+ Users Love Our Products',
    component: () => import('../components/TestimonialsProject')
  },
  {
    path: '/projects/3d-robot',
    title: 'React Three Fiber',
    description: 'An advanced interactive 3D scene built directly inside React using motion tracking.',
    gradient: 'from-indigo-600 to-purple-900',
    thumbnailText: 'Interactive 3D Elements',
    component: () => import('../components/Card2')
  }
];