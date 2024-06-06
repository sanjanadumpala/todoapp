// component that returns html utilising props to calculate the number of task done over the total number of tasks dynamically
function TODOStatusbar ({tasks_completed, total_tasks}) {
    return (
        <section>
            <div>
                <p> Task Done </p>
                <p> Keep it up! </p>
            </div>
            <div>
                {tasks_completed}/{total_tasks}
            </div>
        </section>
    );
}

export default TODOStatusbar;