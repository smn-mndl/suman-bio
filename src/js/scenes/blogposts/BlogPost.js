import './BlogPost.scss';
import AdvancedJavaScriptQstns from './AdvancedJavaScriptQstns';
import FirebaseHosting from './FirebaseHosting';
import { useParams } from 'react-router-dom';

const BlogPosts = () => {
  const { slug } = useParams();

  switch (slug) {
    case 'advanced-javascript-interview-questions':
      return <AdvancedJavaScriptQstns />;
    case 'host-website-on-firebase':
      return <FirebaseHosting />;
    default:
      return 'No blog post found';
  }
};

export default BlogPosts;
