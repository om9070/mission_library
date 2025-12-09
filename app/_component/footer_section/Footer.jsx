import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
      <footer>
        <p>
          <strong>Mission Library</strong> - The Place to Get Success
        </p>
        <p>Empowering Students Since Day One | Your Success is Our Mission</p>
        <p style={{ marginTop: "1rem", opacity: "0.8" }}>
          © 2024 Mission Library. All rights reserved.
        </p>
      </footer>
    </>
  )
}
