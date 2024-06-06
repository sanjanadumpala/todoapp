'use client'; // Ensure this component is treated as a client component

function Form() {
    const handleSubmit = (event) => {
        // prevents the form from submitting and reloading the entire app
        event.preventDefault();
        // reset the form
        event.target.reset();
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input
                type='text'
                name='todo'
                id='todo'
                placeholder="Write your next task"
                />
            </label>
            <button type="submit">
                <span className="visually-hidden">Submit</span>
                <svg>
                    <path d = ""></path>
                </svg>
            </button>
        </form>
    );
}

export default Form;