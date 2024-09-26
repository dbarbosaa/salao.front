// const isProd = process.env.NODE_ENV == 'production'

export const MENUITEMS: any = [
    {
        menutitle: "MAIN",
        Items: [
            {
                path: `${import.meta.env.BASE_URL}indexpage`,
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3" /><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z" /></svg>),
                type: 'link',
                active: false,
                selected: false,
                title: 'Home',
                badge: "badge bg-success text-light ",
                badgetxt: "1",
            },
        ]
    },
    {
        menutitle: "Geral",

        Items: [

            {
                title: 'Cadastros', icon: (null), type: 'sub', active: false, children: [

                    { path: `${import.meta.env.BASE_URL}profissional`, type: 'link', active: false, selected: false, title: 'Profissional' },
                    { path: `${import.meta.env.BASE_URL}cliente`, type: 'link', active: false, selected: false, title: 'Cliente' },
                    { path: `${import.meta.env.BASE_URL}servicos`, type: 'link', active: false, selected: false, title: 'Serviço' },
                ]
            },

            {
                 title: 'Agendamento', icon: (null), type: 'sub', active: false, children: [
                    { path: `${import.meta.env.BASE_URL}servicorealizado`, type: 'link', active: false, selected: false, title: 'Fechar Serviço' },

                 ]

            },
        ]
    },
   

    {
        menutitle: "Configurações",
        Items: [
            {
                title: 'Opções', icon: (null), type: 'sub', active: false, children: [

                    { path: `${import.meta.env.BASE_URL}usuario`, type: 'link', active: false, selected: false, title: 'Usuários' },
                    { path: `${import.meta.env.BASE_URL}sair`, type: 'link', active: false, selected: false, title: 'Sair da aplicação' },

                ]
            },
        ]
    },
]