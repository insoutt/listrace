import { cn } from "@/lib/utils"

const colors = {
  green: 'bg-green-500 text-white',
  blue: 'bg-blue-400 text-white',
  yellow: 'bg-yellow-400 text-white',
  purple: 'bg-purple-500 text-white',
  orange: 'bg-orange-500 text-white',
  red: 'bg-[#ff545a] text-white',
}

type BadgeProps = { color?: keyof typeof colors }

export function Badge({ color = 'blue', className, ...props }: BadgeProps & React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      {...props}
      className={cn(
        className,
        'inline-flex items-center gap-x-1.5 rounded-md px-2 text-sm/5 font-medium sm:text-xs/5',
        colors[color]
      )}
    />
  )
}
