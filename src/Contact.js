import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.location.href = "mailto:pratyush.vempati@students.iiit.ac.in";
  }, []);

  return null;
}
