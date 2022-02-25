exports.getProfessional = (req, res, next) => {
    res.status(200).json({
        professionalName:  [{base64Image: '<put base 64 string here>', primaryDescription: '', workDescription: '', linkTitleText: '', linkedInLink: '', githubLink: '' }]
    });
};
