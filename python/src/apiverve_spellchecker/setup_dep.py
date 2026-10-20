from setuptools import setup, find_packages

setup(
    name='apiverve_spellchecker',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Spell Checker flags misspelled words in submitted English text and generates correction suggestions. It counts total spelling errors and lists possible replacements for each mistaken word.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/spellchecker?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
