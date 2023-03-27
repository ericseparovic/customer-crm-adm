import PropTypes from 'prop-types';

function FormClient({ client }) {
	return (
		<>
			<div>
				<label className='text-xl block m-1' htmlFor='name'>
					Name
				</label>
				<input
					className='bg-gray-100 w-full p-2'
					type='text'
					name='name'
					id='name'
					placeholder='Add name'
					defaultValue={client?.name}
				/>
			</div>
			<div className='mb-4'>
				<label className='text-xl block m-1' htmlFor='company'>
					Company
				</label>
				<input
					className='bg-gray-100 w-full p-2'
					type='text'
					name='company'
					id='company'
					placeholder='Add company'
					defaultValue={client?.company}
				/>
			</div>
			<div className='mb-4'>
				<label className='text-xl block m-1' htmlFor='email'>
					Email
				</label>
				<input
					className='bg-gray-100 w-full p-2'
					type='text'
					name='email'
					id='email'
					placeholder='Add email'
					defaultValue={client?.email}
				/>
			</div>
			<div className='mb-4'>
				<label className='text-xl block m-1' htmlFor='phone'>
					Phone
				</label>
				<input
					className='bg-gray-100 w-full p-2'
					type='text'
					name='phone'
					id='phone'
					placeholder='Add phone'
					defaultValue={client?.phone}
				/>
			</div>
			<div className='mb-4'>
				<label className='text-xl block m-1' htmlFor='note'>
					Note
				</label>
				<textarea
					className='bg-gray-100 w-full p-2 h-28'
					type='text'
					name='note'
					id='note'
					placeholder='Add note'
					defaultValue={client?.note}></textarea>
			</div>
			<input
				type='submit'
				className='mt-5 w-full bg-sky-800 p-3 uppercase font-bold text-white text-lg cursor-pointer'
				value={client ? 'Save' : 'Register'}
			/>
		</>
	);
}

FormClient.propTypes = {
	handleSubmit: PropTypes.func,
};

export default FormClient;
