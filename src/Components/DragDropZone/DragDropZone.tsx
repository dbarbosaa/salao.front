import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';

interface FileDropzoneProps {
    onDrop: (acceptedFiles: File[], fileRejections: FileRejection[]) => void;
    clear?: boolean;
}

export const FileDropzone: React.FC<FileDropzoneProps> = ({ onDrop, clear = false }) => {
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    useEffect(() => {

        if (clear) {
            clearSelection();
        }

    }, [clear]);


    const onDropCallback = useCallback(
        (acceptedFiles: File[], fileRejections: FileRejection[]) => {
            setProgress(0); // Reset progress when new files are dropped
            setSelectedFile(acceptedFiles[0] || null);  // Handle only the first file if multiple are not allowed

            // Simulate a delay for the progress bar (replace this with actual file upload logic)
            const simulateUpload = () => {
                const totalSteps = 100;
                let currentStep = 0;

                const interval = setInterval(() => {
                    currentStep++;
                    setProgress((currentStep / totalSteps) * 100);

                    if (currentStep === totalSteps) {
                        clearInterval(interval);
                        onDrop(acceptedFiles, fileRejections);
                    }
                }, 50);
            };

            simulateUpload();
        },
        [onDrop]
    );

    const clearSelection = () => {
        setSelectedFile(null);
        setProgress(0);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: onDropCallback,
        accept: {
            'application/vnd.ms-excel': ['.xls'],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
        },
        multiple: true,
    });

    const dropzoneStyle: React.CSSProperties = {
        border: '2px dashed #4d5875',
        borderRadius: '4px',
        padding: '10px',
        textAlign: 'center',
        cursor: 'pointer',
    };

    return (
        <div {...getRootProps()} style={dropzoneStyle}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Solte o arquivo aqui...</p>
            ) : (
                <p>Arraste e solte um arquivo aqui, ou clique para selecionar</p>
            )}
            {selectedFile && (
                <div style={{ marginTop: '20px' }}>
                    <h6>Arquivo selecionado: {selectedFile.name}</h6>
                    <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
                            {progress + '%'}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

