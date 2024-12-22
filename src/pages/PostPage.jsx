import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { Calendar, User } from 'lucide-react';
import { posts } from '../data/posts';
import { CodeBlock } from '../components/CodeBlock';

export const PostPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <div className="text-center py-8">Post not found</div>;
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <div className="flex items-center text-sm text-gray-500 space-x-4 mb-8">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {format(new Date(post.date), 'MMM d, yyyy')}
        </div>
        <div className="flex items-center">
          <User className="w-4 h-4 mr-1" />
          {post.author}
        </div>
      </div>
      <div className="prose prose-blue max-w-none">
        <ReactMarkdown
          components={{
            code: CodeBlock,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
};
