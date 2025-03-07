
import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  ctaText?: string
  ctaSecondaryText?: string
  ctaHref?: string
  bottomImage?: {
    light: string
    dark: string
  }
  gridOptions?: {
    angle?: number
    cellSize?: number
    opacity?: number
    lightLineColor?: string
    darkLineColor?: string
  }
}

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        `opacity-[var(--opacity)]`,
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  )
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "Build your ideal body",
      subtitle = {
        regular: "Transform your fitness with ",
        gradient: "personalized coaching.",
      },
      description = "Expert guidance, customized workout plans, and nutrition advice to help you achieve your fitness goals faster and more effectively than ever before.",
      ctaText = "Start your journey",
      ctaSecondaryText = "Learn more",
      ctaHref = "#",
      bottomImage = {
        light: "https://demo-fitness-app.vercel.app/fitness-dashboard-light.png",
        dark: "https://demo-fitness-app.vercel.app/fitness-dashboard-dark.png",
      },
      gridOptions,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative overflow-hidden", className)} ref={ref} {...props}>
        <div className="absolute top-0 z-[0] h-screen w-screen bg-fitness-50/10 dark:bg-fitness-950/30 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(56,189,248,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(56,189,248,0.3),rgba(255,255,255,0))]" />
        <section className="relative max-w-full mx-auto z-1">
          <RetroGrid {...gridOptions} />
          <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
            <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-sm text-gray-600 dark:text-gray-300 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/20 via-fitness-300/20 to-transparent dark:from-zinc-300/5 dark:via-fitness-300/5 border-[2px] border-black/5 dark:border-white/5 rounded-3xl w-fit"
              >
                {title}
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-4xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]"
              >
                {subtitle.regular}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fitness-500 to-fitness-700 dark:from-fitness-400 dark:to-fitness-600">
                  {subtitle.gradient}
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
              >
                {description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="flex items-center justify-center gap-x-4 pt-4"
              >
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#2563EB_50%,#3B82F6_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                    <a
                      href={ctaHref}
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-fitness-400/30 to-transparent dark:from-zinc-300/5 dark:via-fitness-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-fitness-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-fitness-400/30 transition-all sm:w-auto py-4 px-10"
                    >
                      {ctaText}
                      <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </span>
                <a href="#features" className="font-medium text-gray-600 dark:text-gray-300 hover:text-fitness-600 dark:hover:text-fitness-400 transition-colors duration-300 flex items-center">
                  {ctaSecondaryText}
                  <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </motion.div>
            </div>
            {bottomImage && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="mt-20 mx-auto max-w-5xl relative z-10"
              >
                <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl">
                  <img
                    src={bottomImage.light}
                    className="w-full rounded-2xl dark:hidden"
                    alt="Fitness dashboard preview"
                  />
                  <img
                    src={bottomImage.dark}
                    className="hidden w-full rounded-2xl dark:block"
                    alt="Fitness dashboard preview"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 dark:to-black/5 rounded-2xl" />
                </div>
                <div className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 bg-fitness-500/20 blur-3xl rounded-full" />
                <div className="absolute -top-6 -left-6 -z-10 h-40 w-40 bg-fitness-500/20 blur-3xl rounded-full" />
              </motion.div>
            )}
          </div>
        </section>
      </div>
    )
  },
)
HeroSection.displayName = "HeroSection"

export { HeroSection }
