/**
 *
 * @param {{isActive: boolean, label: string, onClick: () => void}} props
 * @returns {JSX.Element} AsideButton component
 */
export function AsideButton({ isActive, label, onClick }) {
  const variations =
    !isActive &&
    'border-2 text-black border-[#FEB23F] bg-white hover:bg-[#FEB23F]/80'
  return (
    <button
      className={`btn w-full bg-[#FEB23F] hover:bg-[#FEB23F]/80 focus:shadow-sm ${variations}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
