import { Button } from "@nextui-org/react";

const EventUACJ = ({ link, info, qr }) => {
    return (
        <>
            <p className="text-black">{info}</p>
            {qr ? (
                <img
                width='200px'
                height='200px'
                src={qr}
                alt="QR"
                className="block mx-auto"
            />
            ) : undefined}
            <Button color="primary" variant="bordered" onClick={() => {window.location.href = link}}>
              Descargar información
            </Button>
        </>
    )
}

export default EventUACJ