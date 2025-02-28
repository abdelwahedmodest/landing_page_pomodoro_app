import React from 'react';

const ErrorMessage = () => {
    return (
        <div>
            <p>You have hit the rate limit. Please <a className="__boltUpgradePlan__">Upgrade</a> to keep chatting, or you can continue coding for free in the editor.</p>
        </div>
    );
};

export default ErrorMessage;
