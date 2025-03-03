const getUserName = document.querySelector("#user") as HTMLInputElement;
const form = document.querySelector("form") as HTMLFormElement;
// const form: HTMLFormElement | null = document.querySelector("form"); 
const main_container = document.querySelector(".main-container") as HTMLElement;
interface UserData {
    id: number;
    login: string;
    avatar_url: string;
    location: string;
    url: string;
}

async function myCustomFetch<T>(url: string, option?: RequestInit): Promise<T> {

    const response = await fetch(url, option)

    if (!response.ok) {
        throw new Error(`Network respone not ok - stats : ${response.status}`);
    }
    const data = await response.json();
    // console.log(data);
    return data;
}

const showResultUI = (singleUser: UserData) => {
    main_container.insertAdjacentHTML(
        "beforeend",
        `
        <div class = 'col-sm-6 col-lg-4 col-xl-3'>
            <div class = 'card'>
                <img src = ${singleUser.avatar_url} alt = ${singleUser.login}/>
                <div class = 'card-footer'>
                    <img src = ${singleUser.avatar_url} alt = ${singleUser.login} class = 'img-fluid w-25'/>
                    <a href = ${singleUser.url}>GitHub</a>
                </div>
            </div>
        </div>
        `
    )
}

function fetchUserData(url: string) {
    myCustomFetch<UserData[]>(url, {}).then((userinfo) => {
        for (const singleUser of userinfo) {
            showResultUI(singleUser);
        }
    })
}

fetchUserData("https://api.github.com/users");





const filterFunction = async (e: Event) => {
    e.preventDefault();

    try {
        const searchItme = getUserName.value.toLowerCase();
        const url = "https://api.github.com/users";

        const getUserData = await myCustomFetch<UserData[]>(url, {});
        const matchingUsers = getUserData.filter((user) => {
            return user.login.toLowerCase().includes(searchItme);
        })
        main_container.innerHTML = ''

        if (matchingUsers.length === 0) {
            main_container.insertAdjacentHTML(
                "beforeend",
                `
                <div class = 'text-center'>
                    <p>No matching user found</p>
                </div>
                `
            )
        } else {
            for (let singleUser of matchingUsers) {
                showResultUI(singleUser)
            }
        }
    } catch (error) {
        console.log("Error : ", error);
    }
}

form.addEventListener('submit', filterFunction)
getUserName.addEventListener('input', filterFunction);