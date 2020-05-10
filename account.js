function accountLogin(email, password) {
    const users = [
        {
        firstName: 'Tony',
        email: 'tony@stark.com',
        password: 'iamironman'
        },
        {
        firstName: 'Steve',
        email: 'captain@hotmail.com',
        password: 'icandothisallday'
        },
        {
        firstName: 'Peter',
        email: 'peter@parker.com',
        password: 'enajyram'
        },
        {
        firstName: 'Natasha',
        email: 'natasha@gamil.com',
        password: '*parol#@$!'
        },
        {
        firstName: 'Nick',
        email: 'nick@shield.com',
        password: 'password'
        }
    ]

    let account = users.filter((user) => {
        let userEmail = user.email
        let userPassword = user.password
        return userEmail === email && userPassword === password
    })

    if(account.length === 0) {
        return '帳號 / 密碼錯誤! 請重新輸入'
    } else {
        return account[0].firstName
    }
    
}

module.exports = accountLogin
