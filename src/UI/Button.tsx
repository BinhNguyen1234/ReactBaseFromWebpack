export default function Button ({ children, onClick, type }: { children: string, onClick: () => void, type: 'button' | 'reset' | 'submit' }): JSX.Element {
    return (<button onClick={onClick} type={type}>{children}</button>)
}
