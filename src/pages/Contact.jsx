export function Contact() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 p-6 gap-20'>
      <div className='bg-white shadow-lg rounded-2xl p-8 w-100'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Contact Us</h2>
        <form className='space-y-4 text-left'>
          <div>
            <label className='block text-sm font-medium text-gray-600 mb-5'>
              Name
            </label>
            <input
              type='text'
              placeholder='Your name'
              className='w-full p-2 border-2 border-blue-500 rounded'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-600 mb-5'>
              Email
            </label>
            <input
              type='email'
              placeholder='you@example.com'
              className='w-full p-2 border-2 border-blue-500 rounded'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-600 mb-5'>
              Message
            </label>
            <textarea
              rows='4'
              placeholder='Your message...'
              className='w-full mt-1 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none border-2 border-blue-500 rounded'></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition'>
            Send
          </button>
        </form>
      </div>
      <article className='w-full md:w-1/2 text-black bg-white shadow-lg rounded-2xl p-8'>
        <h2 className="text-2xl font-bold mb-6">Have some questions?</h2>
        <p>Have something on your mind? We’d love to hear from you! Whether it’s a question, a suggestion, or just a quick hello, don’t hesitate to drop us a message.</p>
        <p>Our team checks messages daily and makes sure every voice is heard. We believe that feedback helps us grow and improve.</p>
        <p>Simply fill out the form below — it won’t take more than a minute — and we’ll get back to you shortly.</p>
      </article>
    </div>
  );
}
