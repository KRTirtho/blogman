import CreatePostForm from "./__comp/create-form";

const CreatePostPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h4 className="text-xl font-semibold">
        Write Something beautiful for the world
      </h4>
      <CreatePostForm />
    </div>
  );
};

export default CreatePostPage;
