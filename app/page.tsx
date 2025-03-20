import NavBar from "./components/navBar";
import FaviconForm from "./components/Form";
import { MarqueeDemo } from "./components/marQuee";
import Link from "next/link";

export default function Home() {

  return (
    <div className="group/sidebar-wrapper has-[[data-variant=inset]]:bg-sidebar flex min-h-svh w-full">
      <main className="flex min-h-screen w-full flex-col items-center">
        <div className="flex w-full flex-1 flex-col items-center gap-10 md:gap-20">
          <NavBar />
          <div className="flex flex-col gap-10 md:gap-20 z-10">
            <div className="container flex flex-col items-center gap-16 px-5" id="hero">
              <div className="mx-auto space-y-6 lg:max-w-3xl">
                <h1 className="mx-auto text-center text-3xl md:text-5xl font-[600]">
                  Extract <span className="text-neon">Favicons</span> Instantly!
                </h1>
                <p className="text-center text-lg font-medium text-foreground/60 md:text-xl">
                  Effortlessly retrieve website favicons in various sizes and formats for your projects.
                </p>
                <div>

                  <FaviconForm />

                </div>

              </div>
            </div>


            <section id="benefits" className="container pt-16 md:w-full md:pt-24 px-5">
              <div className="space-y-12">
                <div className="space-y-4 text-center">
                  <p className="text-sm font-medium uppercase tracking-wider text-neon">BENEFITS</p>
                  <h2 className="text-3xl font-semibold tracking-tight md:text-4.5xl">
                    Tired of Finding and Extracting Favicons Manually?
                  </h2>
                  <p className="text-muted-foreground">
                    Simplify the process with our tool—effortlessly retrieve high-quality favicons for any website.
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  <div className="rounded-lg border-none bg-transparent shadow-none">
                    <div className="space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="24" cy="24" r="24" fill="#E6F4EA" />
                          <circle cx="24" cy="24" r="10" stroke="#2E7D32" strokeWidth="2" fill="none" />
                          <line x1="24" y1="20" x2="24" y2="24" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" />
                          <line x1="24" y1="24" x2="27" y2="27" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" />
                        </svg>


                      </div>
                      <h3 className="text-xl font-semibold"> Instant Favicon Retrieval</h3>
                      <p className="text-muted-foreground">
                        No need to inspect the page source or manually extract favicons. Just enter a URL, and our tool fetches the best favicon available.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border-none bg-transparent shadow-none">
                    <div className="space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="24" cy="24" r="24" fill="#E6F4EA" />
                          <path d="M26 8L14 26H24L22 38L34 20H24L26 8Z" fill="#2E7D32" />
                        </svg>


                      </div>
                      <h3 className="text-xl font-semibold">High-Quality Icons</h3>
                      <p className="text-muted-foreground">Automatically retrieves the highest resolution favicon, ensuring crisp and clear visuals for your projects.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border-none bg-transparent shadow-none">
                    <div className="space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="24" cy="24" r="24" fill="#E6F4EA" />
                          <path d="M16 24L22 30L32 18" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>


                      </div>
                      <h3 className="text-xl font-semibold"> Simple and Easy to Use</h3>
                      <p className="text-muted-foreground">
                        Just paste the website link, hit &quot;GET&quot; and download your favicon in seconds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="marquee" className="container sm:container mx-auto w-screen px-5 pt-16 md:w-full md:pt-24">

              <div className="space-y-12">
                <div className="space-y-4 text-center">
                  <p className="text-sm font-medium uppercase tracking-wider text-neon">TESTIMONIALS</p>
                  <h2 className="text-3xl font-semibold tracking-tight md:text-4.5xl">
                    What our clients are saying
                  </h2>

                </div>
                <MarqueeDemo />
              </div>
            </section>
          </div>
        </div>
        <footer className="container mt-10 flex w-full gap-8 border-t p-4 text-center text-xs items-center justify-center">
          <div className="flex flex-col gap-1 text-sm lg:flex-row items-center xl:gap-1">
            <Link className="group inline-flex h-8 w-max items-center justify-center rounded-sm bg-background px-2.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="mailto:khoadinh.work@gmail.com">Support: khoadinh.work@gmail.com</Link>
          </div>

        </footer>
      </main>
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 -z-10 stroke-gray-300/50 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"><defs><pattern id=":S1:" width="40" height="40" patternUnits="userSpaceOnUse" x="-1" y="-1"><path d="M.5 40V.5H40" fill="none" strokeDasharray="0"></path></pattern></defs><rect width="100%" height="100%" strokeWidth="0" fill="url(#:S1:)"></rect></svg>
    </div>


  );
}
