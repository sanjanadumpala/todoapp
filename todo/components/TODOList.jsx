function TODOList ({todos}) {
    return (
        <ol className="todo-list">
            {todos && todos.length > 0 ? (
                todos?.map((item, index) => <Item key = {index} item = {item}/>)
            ) : (
                <p>Seems lonely n here, what are you upto?</p>
            )}
        </ol>
    );
}

export default TODOList;

function Item ({item}) {
    return (
        <li id={item?.id} className="todo-item">
            <button className="todo-items-left">
                <svg>
                    <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998"/>
                </svg>
                <p>{item?.title}</p>
            </button>
            <div className="todo-items-right">
                <button>
                    <span className="visually-hidden">Edit</span>
                    <svg>
                        <path d="" />
                    </svg>
                </button>
                <button>
                    <span className="visually-hidden">Delete</span>
                    <svg>
                        <path d="" />
                    </svg>
                </button>
            </div>
        </li>
    );
}