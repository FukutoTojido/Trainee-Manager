const Label = (props) => {
    return (
        <div className="labelContainer">
            {props.label}
            <style jsx>{`
                .labelContainer {
                    width: 100%;
                    font-weight: 700;

                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 10px;
                }

                .labelContainer:before {
                    content: '';
                    display: block;

                    width: 6px;
                    height: 15px;

                    background-color: white;
                    border-radius: 15px;
                }
            `}</style>
        </div>
    );
};

export { Label };