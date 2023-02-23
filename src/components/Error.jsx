import PropTypes from 'prop-types';

function Error({ children }) {
	return (
		<div className='text-center, py-4 px-2 bg-red-500 text-white font-bold rounded mb-4'>
			{children}
		</div>
	);
}

Error.propTypes = {
	children: PropTypes.string,
};
export default Error;
