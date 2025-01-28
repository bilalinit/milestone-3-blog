'use client'

import { useState, useEffect } from 'react'

interface Comment {
  id: number;
  author: string;
  content: string;
  createdAt: string;
}

export default function CommentSection({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments-${postId}`)
    if (storedComments) {
      setComments(JSON.parse(storedComments))
    }
  }, [postId])

  const saveComments = (updatedComments: Comment[]) => {
    localStorage.setItem(`comments-${postId}`, JSON.stringify(updatedComments))
    setComments(updatedComments)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim() === '' || author.trim() === '') return

    const comment: Comment = {
      id: Date.now(),
      author: author.trim(),
      content: newComment.trim(),
      createdAt: new Date().toISOString(),
    }

    const updatedComments = [...comments, comment]
    saveComments(updatedComments)
    setNewComment('')
    setAuthor('')
  }

  const handleDelete = (id: number) => {
    const updatedComments = comments.filter(comment => comment.id !== id)
    saveComments(updatedComments)
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <div className="space-y-4 mb-8">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-blue-400">{comment.author}</span>
              <span className="text-sm text-gray-400">
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-300 mb-2">{comment.content}</p>
            <button
              onClick={() => handleDelete(comment.id)}
              className="text-sm text-red-400 hover:text-red-300 transition-colors duration-300"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-300">
            Your Comment
          </label>
          <textarea
            id="comment"
            rows={4}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-blue-500 focus:border-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Post Comment
        </button>
      </form>
    </div>
  )
}
