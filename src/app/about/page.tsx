import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            About Me
          </h1>
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-blue-400 font-semibold">Bilal Saeed</div>
                <p className="mt-2 text-gray-300">Web Developer, Video Editor & 3D Artist</p>
                <p className="mt-4 text-gray-400">
                  Hello! Im Bilal Saeed, a passionate web developer and tech enthusiast. I started learning coding a
                  year ago from GIAIC, first under Sir Isfan and now under Sir Mubisher. I have learned TypeScript,
                  HTML, CSS, Tailwind, Next.js, Sanity, Vercel, and Firebase. Along with web development, I am also a
                  video editor, motion graphics artist in tools like Adobe After Effects, Davinchi Resolve and Adobe Premiere Pro, and 3D artist in Blender and Unreal Engine.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-800 rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">My Journey</h2>
            <p className="text-gray-300 mb-4">
              I started my coding journey a year ago, and I’ve been in love with web development ever since. Over the
              past year, I’ve gained experience in building web applications and learning about modern technologies.
            </p>
            <p className="text-gray-300 mb-4">
              My goal is to create web experiences that are not only functional but also intuitive and enjoyable for
              users. I believe in continuous learning and always strive to stay updated with the latest trends and best
              practices in web development.
            </p>
          </div>

          <div className="mt-12 bg-gray-800 rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Skills & Expertise</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>JavaScript (ES6+) / TypeScript</li>
              <li>React.js / Next.js</li>
              <li>HTML5 / CSS3 / Tailwind CSS</li>
              <li>Sanity CMS</li>
              <li>Vercel / Firebase</li>
              <li>Blender (3D Art, Animation)</li>
              <li>Unreal Engine (3D Art, Animation)</li>
              <li>Video Editing & Motion Graphics ( After Effects, Adobe Premiere Pro, Davinchi Resolve)</li>
            </ul>
          </div>

          <div className="mt-12 bg-gray-800 rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Get in Touch</h2>
            <p className="text-gray-300 mb-4">
              Im always open to new opportunities, collaborations, or just a friendly chat about web development or
              digital arts. Feel free to reach out to me through any of the following channels:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>Email: ahmedbilalyt20@gmail.com</li>
              <li>LinkedIn: linkedin.com/in/bilal saeed</li>
              <li>GitHub: github.com/bilalinit</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
