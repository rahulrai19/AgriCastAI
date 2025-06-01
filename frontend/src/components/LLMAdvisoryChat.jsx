import { useState } from 'react'

function LLMAdvisoryChat() {
  const [messages, setMessages] = useState([
    { sender: 'assistant', text: 'Ask me anything about your crops or weather!' }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { sender: 'user', text: input }, { sender: 'assistant', text: 'Placeholder response: If rainfall is low, consider supplemental irrigation.' }])
    setInput('')
  }

  return (
    <div>
      <div className="min-h-[60px] border rounded p-3 mb-2 bg-gray-50 max-h-40 overflow-y-auto">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.sender === 'user' ? 'text-right' : 'text-left'}>
            <span className={msg.sender === 'user' ? 'text-green-700 font-semibold' : 'text-blue-700 font-semibold'}>
              {msg.sender === 'user' ? 'You' : 'Assistant'}:
            </span> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input className="flex-1 border rounded px-3 py-2" value={input} onChange={e => setInput(e.target.value)} placeholder="Type your question..." />
        <button className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition" onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default LLMAdvisoryChat 