import './BlogPost.scss';
import AdvancedJavaScriptQstns from './AdvancedJavaScriptQstns';
import { useParams } from 'react-router-dom';

const BlogPosts = () => {
  const { slug } = useParams();
  return slug === 'advanced-javascript-interview-questions' ? (
    <AdvancedJavaScriptQstns />
  ) : (
    'No blog post found'
  );
};

export default BlogPosts;
