// spinners https://codesandbox.io/s/loaders-and-spinners-4jltk?file=/components/Spinner/SpinnerBrand.js:0-719
import { Box } from 'grommet'

export default function SpinnerDefault({ type = 'default' }) {
  let size = 40
  if (type === 'small') size = 30
  if (type === 'large') size = 50
  if (type === 'xlarge') size = 70

  const spinning = (
    <svg
      version="1.1"
      viewBox="0 0 32 32"
      width={`${size}px`}
      height={`${size}px`}
      fill="#7D4CDB"
    >
      <path
        opacity=".25"
        d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
      />
      <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 16 16"
          to="360 16 16"
          dur="0.8s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
  return (
    <Box align="center" justify="center">
      {spinning}
    </Box>
  )
}
