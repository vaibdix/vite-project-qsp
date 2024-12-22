import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Calendar, User } from 'lucide-react';

export const BlogCard = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <Link to={`/post/${post.id}`}>
          <h2 className="text-2xl font-bold text-gray-900 hover:text-blue-600 mb-2">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {format(new Date(post.date), 'MMM d, yyyy')}
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {post.author}
          </div>
        </div>
      </div>
    </article>
  );
};
