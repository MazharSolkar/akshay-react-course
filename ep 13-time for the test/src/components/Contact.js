const Contact = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl p-4 m-4'>This is contact us page</h1>
      <form>
        <input
          className='border-2 border-slate-800 p-2 m-2'
          type='text'
          placeholder='name'
        />
        <input
          className='border-2 border-slate-800 p-2 m-2'
          type='text'
          placeholder='message'
        />
        <button className='border-2 border-slate-800 px-2 py-1 rounded-lg'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
