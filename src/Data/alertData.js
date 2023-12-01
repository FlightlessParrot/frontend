export const alertData={
    positive:{
        status: 'success',
        title:'Sukces',
        description:'Udało się wysłać wiadomość. Zajmiemy się Twoim problemem tak szybko jak to możliwe.'
    },
    negative:{
        status: 'error',
        title:'Wystąpił błąd',
        description:'Nie udało się wysłać wiadomości. Spróbuj ponownie.'
    },
    login: {
        status: 'error',
        title:'Wystąpił błąd',
        description:'Nie udało się zalogować. Pamiętaj, że zbyt duża liczba prób zablokuje możliwość logowania na okres do 5 minut.'
    }
}
export const alertRegisterData={
    positive:{
        status: 'success',
        title:'Sukces',
        description:'Pomyślnie założono konto. Na Twój adres mailowy wysłaliśmy link uwierzytelniający. Sprawdź swojego maila.'
    },
    negative:{
        status: 'error',
        title:'Wystąpił błąd',
        description:'Nie udało się założyć konta. Może to być spowodowane tym, że dla podanego adresu e-mail założono już konto.'
    },
}
export const alertRemindData={
    positive:{
        status: 'success',
        title:'Sukces',
        description:'Wysłano link resetujący hasło na podany mail.'
    },
    negative:{
        status: 'error',
        title:'Wystąpił błąd',
        description:'Coś poszło nie tak. Sprawdź czy podałeś poprawny mail. Jeśli dane sa poprawne, to spróbuj ponownie za 5 minut.'
    },
}

export const alertResetPasswordData={
    positive:{
        status: 'success',
        title:'Sukces',
        description:'Pomyślnie zmieniono hasło.'
    },
    negative:{
        status: 'error',
        title:'Wystąpił błąd',
        description:'Coś poszło nie tak. Wygeneruj ponownie link do zmiany hasła.'
    },
}
export const alertDeleteTest={
    positive:{
        status: 'success',
        title:'Sukces',
        description:'Pomyślnie usunięto test.'
    },
    negative:{
        status: 'error',
        title:'Wystąpił błąd',
        description:'Coś poszło nie tak. Nie udało się usunąć testu.'
    },
}

export const alertNewTest={
    positive:{
        status: 'success',
        title:'Sukces',
        description:'Pomyślnie utworzono test.'
    },
    negative:{
        status: 'error',
        title:'Wystąpił błąd',
        description:'Coś poszło nie tak. Nie udało się utworzyć testu.'
    },
}
export const alertDefault={
    positive:{
        status: 'success',
        title:'Sukces',
        description:'Operacja wykonana pomyślnie.'
    },
    negative:{
        status: 'error',
        title:'Wystąpił błąd',
        description:'Coś poszło nie tak. Spróbuj ponownie później.'
    },
}

export const alertSolveTest={
    status: 'error',
        title:'Wystąpił błąd',
        description:'Coś poszło nie tak. Nie udało się wysłać testu.'
}