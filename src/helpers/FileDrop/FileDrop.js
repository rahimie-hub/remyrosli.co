import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { Container, Row, Col, Table } from 'react-bootstrap';
import fileSize from 'filesize';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#b9b9b9',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

const FileDrop = (props) => {
    const onDrop = files => {
        props.onDrop(files);
    }

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        acceptedFiles
    } = useDropzone({
        multiple: true,
        onDropAccepted: files => {
            onDrop(files);
        }
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragAccept,
        isDragReject
    ]);

    const files = acceptedFiles.map((file, index) => (
        <tr key={file.path}>
            <td>{index + 1}</td>
            <td>{file.path}</td>
            <td>{fileSize(file.size)}</td>
        </tr>
    ));



    const fileTableList = () => {
        return <Row className="mt-2">
            <Col className="pl-0">
                <Table striped bordered hover size="sm" style={{ width: '50%' }} className="mb-0">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name File</th>
                            <th>Saiz File</th>
                        </tr>
                    </thead>
                    <tbody>
                        {files}
                    </tbody>
                </Table>
            </Col>
        </Row>;
    }

    return (
        <Container fluid={true}>
            <Row>
                <Col {...getRootProps({ style })}>
                    <input {...getInputProps()} disabled={props.disabledForm}/>
                    {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
                    <p></p>
                    <p>
                        <strong>Tarik dan letak</strong> fail atau klik disini.
                    </p>
                </Col>
            </Row>
            {files.length > 0 ? fileTableList() : ''}

        </Container>
    );
}

export default FileDrop;