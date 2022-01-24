
function GlobalStyle(){
    return(
        <style global jsx>{`
            *{
                margin: 0;
                padding;
                box-sizing: border-box;
                list-style: none;

            }

            body{
                font-family: 'Open Sans', sans-serif;
            }

            /*App fit Height*/
            html, body, #_next{
                min-height: 100vh;
                display: flex:
                flex: 1;
            }

            #_next{
                flex: 1;
            }

            #_next > * {
                flex: 1;
            }

        `}</style>
    )
}

function Title(props){
    console.log(props);
    const Tag = props.tag;
    return(
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: red;
                    font-size: 24px;
                    font-weight: 600;
                }
            `}</style>

        </>
        
    );
}


function HomePage() {
    return (
        <div>
            <GlobalStyle></GlobalStyle>
            <Title tag="h2">Boas vinda de volta</Title>
            <h2>Chat Discord</h2>
        </div>
        
    )
}

export default HomePage