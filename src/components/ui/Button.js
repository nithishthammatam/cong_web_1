'use client'

export default function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  ...props
}) {
  // Base classes now mainly handle positioning/layout if needed, relying on CSS for visual style
  const baseClasses = 'inline-flex items-center justify-center transition-all duration-200'

  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
    link: 'btn-ghost' // Map link to ghost for backward compatibility
  }

  const classes = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
