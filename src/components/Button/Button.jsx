import classNames from 'classnames';

export const Button = ({ type = 'button', className = 'btn-primary', isLoading, children, disabled, ...props }) => {
  return (
    <button type={type} className={classNames('btn', className)} {...props} disabled={isLoading || disabled}>
      {isLoading ? (
        <>
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
          <span class="visually-hidden">Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
