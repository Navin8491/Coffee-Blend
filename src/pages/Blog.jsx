import React from 'react';
import PageHeader from '../components/PageHeader';
import RecentBlogPreview from '../components/RecentBlogPreview';

const Blog = () => {
  return (
    <div>
      <PageHeader title="Blog" bgImage="/images/bg_3.jpg" />
      <RecentBlogPreview />
    </div>
  );
};

export default Blog;
