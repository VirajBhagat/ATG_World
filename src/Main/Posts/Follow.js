import React from 'react';

// img
import Follow1 from '../../static files/img/follow1.png';
import Follow2 from '../../static files/img/follow2.png';
import Follow3 from '../../static files/img/follow3.png';
import Follow4 from '../../static files/img/follow4.png';

function Follow() {
    return (
        <div className='Follow'>
            <p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_1263)">
                    <path opacity="0.3" d="M15.75 9V7.5H9L10.005 3.495L6.75 6.75V14.25H13.5L15.75 9Z" fill="black"/>
                    <path d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1_1263">
                    <rect width="18" height="18" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                Recommended Groups
            </p>
            <div>
                <div className='Follow-user'>
                    <div>
                        <img src={Follow1} />
                        <p>Leisure</p>
                    </div>
                    <button>Follow</button>
                </div>
                <div className='Follow-user'>
                    <div>
                        <img src={Follow2} />
                        <p>Leisure</p>
                    </div>
                    <button>Follow</button>
                </div>
                <div className='Follow-user'>
                    <div>
                        <img src={Follow3} />
                        <p>Leisure</p>
                    </div>
                    <button>Follow</button>
                </div>
                <div className='Follow-user'>
                    <div>
                        <img src={Follow4} />
                        <p>Leisure</p>
                    </div>
                    <button>Follow</button>
                </div>
                <div className='Follow-SeeMore'>
                    <p>See More...</p>
                </div>
            </div>
        </div>
    );
}

export default Follow;