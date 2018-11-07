import React from 'react';

class NewUser extends React.Component {
    state = {
        name: '',
        email: ''
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim() && this.state.body.trim()) {
            this.props.onAddUser(this.state);
            this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
            name: '',
            email: ''
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Title"
                            className="form-control"
                            name="name"
                            onChange={ this.handleInputChange }
                            value={ this.state.name }
                        />
                    </div>
                    <div className="form-group">
            <textarea
                cols="19"
                rows="8"
                placeholder="Body"
                className="form-control"
                name="email"
                onChange={ this.handleInputChange }
                value={ this.state.email }>
            </textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">ذخیره</button>
                        <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
                            پاک کردن
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewUser;