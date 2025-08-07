"use client"

import { useActionState, useOptimistic } from "react"
import { useFormStatus } from "react-dom"
import { useState } from "react"

// Minimal optimistic add-only demo
const delay = (ms: number) => new Promise((r) => setTimeout(r, ms))

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="px-3 py-1 rounded bg-black text-white disabled:opacity-50"
    >
      {pending ? "Adding…" : "Add"}
    </button>
  )
}

export default function DemoActionsPage() {
  // Real data
  const [todos, setTodos] = useState<string[]>([])

  // Optimistic UI: reducer just appends the new text
  const [optimisticTodos, addOptimistic] = useOptimistic(
    todos,
    (state: string[], newText: string) => [...state, newText]
  )

  // Form action with validation and pending flag
  const [error, submit, pending] = useActionState(
    async (_prev: string | null, fd: FormData) => {
      const text = String(fd.get("text") ?? "")
      if (!text.trim()) return "Todo text is required"
      addOptimistic(text) // show immediately
      await delay(2000)    // pretend server
      setTodos((prev) => [...prev, text]) // commit
      return null
    },
    null
  )

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <h2 className="text-xl font-semibold">Todo (Optimistic add)</h2>

      <form action={submit} className="flex items-center gap-2">
        <input
          type="text"
          name="text"
          placeholder="Add a todo"
          className="flex-1 border rounded px-3 py-1"
          disabled={pending}
        />
        <SubmitButton />
      </form>
      {error && <p className="text-red-600 text-sm">{error}</p>}

      <ul className="space-y-1">
        {optimisticTodos.map((t, i) => (
          <li key={i} className="text-sm border rounded px-2 py-1">
            {t}
          </li>
        ))}
        {optimisticTodos.length === 0 && (
          <li className="text-gray-500 text-sm">No todos yet.</li>
        )}
      </ul>
    </div>
  )
}

