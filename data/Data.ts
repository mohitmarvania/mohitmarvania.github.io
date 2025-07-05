export const projects = [
    {
        id: 1,
        title: "Document Shadow Removal",
        des: "A lightweight hybrid network that removes shadows from high-resolution document scans by splitting each image into low- and high-frequency bands. A Low-Frequency module (adapted from LSRNet/DRNet in SHARDS) corrects global illumination, while a High-Frequency module (drawn from FSENet) uses dilated convolutions to restore fine text edges; the two streams are fused and constrained with tanh to yield a clean, 1024 × 1024 shadow-free page. Trained on the large-scale SD7K dataset, the model delivers fast inference while preserving font clarity and layout integrity.",
        img: "./D_S_R.png",
        tags: ["Python", "PyTorch", "NumPy", "PIL", "OpenCV", "YOLO"],
        link: "https://github.com/mohitmarvania/Document_Shadow_Removal",
    },
    {
        id: 2,
        title: "SimpleNLP",
        des: "SimpleNLP is an educational, lightweight NLP library built from scratch using only NumPy, Pandas, and scikit-learn—no deep-learning frameworks. It implements everything from tokenization and word-embedding algorithms (Word2Vec, TF-IDF) to core models like logistic regression, simple RNNs, and a basic Transformer encoder. Two example tasks—Twitter sentiment classification and Shakespeare-style text generation—demonstrate how these components work end-to-end. Designed for learning, SimpleNLP reveals exactly how natural-language pipelines function under the hood.",
        img: "./simpleNLP1.png",
        tags: ["NumPy", "Pandas", "scikit-learn"],
        link: "https://github.com/mohitmarvania/SimpleNLP",
    },
    {
        id: 3,
        title: "Video Object Detection",
        des: "A frame-by-frame vehicle detection pipeline that uses FFmpeg and a YOLO model to automatically identify and annotate vehicles in each video frame. Detected frames are saved with bounding boxes and labels, then recombined into a fully annotated output video. This approach dramatically simplifies large-scale labeling tasks—avoiding manual misses and inconsistencies—by producing consistent, accurate annotations end to end.",
        img: "./V_O_D.png",
        tags: ["Flask", "ffmpeg", "YOLO", "OpenCV"],
        link: "https://github.com/mohitmarvania/video-object-detection",
    }
]