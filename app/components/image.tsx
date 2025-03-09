'use client'
import NextImage, { ImageProps as NextImageProps } from 'next/image'

const customLoader = ({ src }: { src: string }) => {
  return src
}

const Image = (props: NextImageProps) => {
  return (
    <NextImage
      {...props}
      loader={customLoader}
      unoptimized
      priority
    />
  )
}

export default Image
