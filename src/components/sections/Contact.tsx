"use client"

import { Button, TextareaAutosize, Alert } from "@mui/material"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import SendIcon from "@mui/icons-material/Send"
import { useState } from "react"
import { pages } from "../layout/ResponsiveAppBar"

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [messageFeedback, setMessageFeedback] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setMessageFeedback("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus("success")
        setMessageFeedback("✅ Your message was sent successfully!")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setStatus("error")
        setMessageFeedback("❌ Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setMessageFeedback("❌ Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="grid grid-cols-1 p-8 sm:p-20 bg-gray-950">
      <h1 className="w-49 text-4xl font-semibold tracking-widest font-poppins border-b-4 border-b-amber-300 mb-20">
        Contact
      </h1>
      <div className="grid grid-cols-1">
        {/* Texto de presentación */}
        <div>
          <p>
            Junior Fullstack developer based in Barcelona, building digital
            experiences from concept to deployment.
          </p>
        </div>

        {/* Formulario */}
        <div className="pt-10 md:w-1/2">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
            autoComplete="off"
          >
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              slotProps={{
                inputLabel: { style: { color: "white" } },
                input: {
                  style: {
                    color: "white",
                    backgroundColor: "#1f1f1f",
                    borderRadius: "6px",
                  },
                },
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              slotProps={{
                inputLabel: { style: { color: "white" } },
                input: {
                  style: {
                    color: "white",
                    backgroundColor: "#1f1f1f",
                    borderRadius: "6px",
                  },
                },
              }}
            />
            <TextareaAutosize
              maxRows={4}
              placeholder="Type here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                width: "100%",
                backgroundColor: "#1f1f1f",
                color: "white",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #555",
              }}
            />

            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Let’s talk"}
            </Button>

            {status !== "idle" && messageFeedback && (
              <Alert
                severity={status === "success" ? "success" : "error"}
                sx={{ mt: 2 }}
              >
                {messageFeedback}
              </Alert>
            )}
            <div className="flex gap-4 text-lg pt-18 font-semibold">
              {pages.map((p) => (
                <div key={p.name} className="p-8">
                  <a href={p.href}>{p.name}</a>
                </div>
              ))}
            </div>
          </Box>
        </div>
      </div>
    </section>
  )
}
