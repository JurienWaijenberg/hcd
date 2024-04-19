

function appendHTML() {
	const ele = document.body;
	const newDiv = document.createElement("div");
	newDiv.innerHTML = `
					<style>
                        html {
                            scroll-behavior: smooth;
                            overflow-y: overlay;
                            scrollbar-gutter: auto;
                        }
						#scroll-top {
                            width: 100px !important;
                            height: 100px !important;
                            background: #fff;
                            border-radius: 50%;
                            position: fixed;
                            bottom: 150px;
                            right: 1em;
                            left: auto;
                            z-index: 99999999999999999;
                            cursor: pointer;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            padding: 3px;
                        }

                        #scroll-bottom {
                            width: 100px !important;
                            height: 100px !important;
                            background: #fff;
                            border-radius: 50%;
                            position: fixed;
                            bottom: 30px;
                            right: 1em;
                            left: auto;
                            z-index: 99999999999999999;
                            cursor: pointer;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            padding: 3px;
                        }

                        /* width */
                        ::-webkit-scrollbar {
                            width: 30px;
                            position: absolute;
                        }

                        /* Track */
                        ::-webkit-scrollbar-track {
                            border-radius: 10px;
                        }
                        
                        /* Handle */
                        ::-webkit-scrollbar-thumb {
                            background: red; 
                            border-radius: 10px;
                        }

                        /* Handle on hover */
                        ::-webkit-scrollbar-thumb:hover {
                            background: #b30000; 
                        }
					</style>
                    
                    <svg id="scroll-top" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                        <path id="angle-circle-down" d="M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0Zm0,66.667a12.471,12.471,0,0,1-8.279-3.133c-1.362-1.213-2.654-2.392-3.5-3.238L26.25,48.529a4.167,4.167,0,0,1,5.833-5.942l12,11.787c.783.779,1.95,1.837,3.162,2.917a4.167,4.167,0,0,0,5.513,0c1.208-1.075,2.375-2.133,3.133-2.888L67.917,42.588a4.167,4.167,0,1,1,5.833,5.942l-12,11.787c-.833.833-2.112,2-3.471,3.2A12.458,12.458,0,0,1,50,66.667Z" transform="translate(100 100) rotate(180)"/>
                    </svg>
                    <svg id="scroll-bottom" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                        <path id="angle-circle-down" d="M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0Zm0,66.667a12.471,12.471,0,0,1-8.279-3.133c-1.362-1.213-2.654-2.392-3.5-3.238L26.25,48.529a4.167,4.167,0,0,1,5.833-5.942l12,11.787c.783.779,1.95,1.837,3.162,2.917a4.167,4.167,0,0,0,5.513,0c1.208-1.075,2.375-2.133,3.133-2.888L67.917,42.588a4.167,4.167,0,1,1,5.833,5.942l-12,11.787c-.833.833-2.112,2-3.471,3.2A12.458,12.458,0,0,1,50,66.667Z"/>
                    </svg>
				`;
	ele.appendChild(newDiv);

    document.getElementById("scroll-top").addEventListener("click", scrolltop);
    document.getElementById("scroll-bottom").addEventListener("click", scrollBottom);
}

function scrolltop() {
    window.scrollBy(0, -window.innerHeight / 2);
}

function scrollBottom() {
    window.scrollBy(0, window.innerHeight / 2);
}

console.log("This is a popup!");

window.onload = function () {
	appendHTML(); // Call the appendHTML function when the page loads
};